import React, { useState } from 'react';

const Apply = () => {
    const [formData, setFormData] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        pronouns: '',
        bio: '',
        profileImage: null,
        // Step 2: School/Professional Details
        schoolDetails: [{ schoolName: '', degree: '', graduationYear: '' }],
        // Step 3: Shared Links and Reasons for Joining
        linkedin: '',
        github: '',
        otherLinks: [],
        joinReason: '',
        // Step 4: Acknowledgement
        termsAgreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const updatedFormData = { ...formData };

        if (type === 'file') {
            updatedFormData[name] = files[0];
        } else {
            updatedFormData[name] = value;
        }

        setFormData(updatedFormData);
    };

    const handleNext = () => {
        setFormData((prevData) => ({ ...prevData, step: prevData.step + 1 }));
    };

    const handlePrevious = () => {
        setFormData((prevData) => ({ ...prevData, step: prevData.step - 1 }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleSchoolDetailsChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchoolDetails = [...formData.schoolDetails];
        updatedSchoolDetails[index] = {
            ...updatedSchoolDetails[index],
            [name]: value,
        };
        setFormData({ ...formData, schoolDetails: updatedSchoolDetails });
    };

    const handleAddSchool = () => {
        setFormData({
            ...formData,
            schoolDetails: [
                ...formData.schoolDetails,
                { schoolName: '', degree: '', graduationYear: '' },
            ],
        });
    };

    const handleRemoveSchool = (index) => {
        const updatedSchoolDetails = [...formData.schoolDetails];
        updatedSchoolDetails.splice(index, 1);
        setFormData({ ...formData, schoolDetails: updatedSchoolDetails });
    };

    return (
        <div className="p-40 m-auto space-y-2">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div className="h-2 bg-yellow-500" style={{ width: `${(formData.step - 1) * 25}%` }}></div>
                </div>
                {formData.step === 1 && (
                    <>
                        <div className="space-y-6 text-white">
                            <h2 className="text-2xl text-yellow-300 font-bold">Step 1: Personal Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="E.g., John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="E.g., Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Profile Image</label>
                                    <input
                                        type="file"
                                        name="profileImage"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E.g., john.doe@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Pronouns</label>
                                    <select
                                        name="pronouns"
                                        value={formData.pronouns}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full">
                                        <option value="">Select Pronouns</option>
                                        <option value="she/her">She/Her</option>
                                        <option value="he/him">He/Him</option>
                                        <option value="they/them">They/Them</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <label className="block text-gray-300">Short Bio</label>
                            <textarea
                                name="bio"
                                placeholder="E.g., I'm passionate about..."
                                value={formData.bio}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded w-full h-24"
                            />
                        </div>
                    </>
                )}
                {formData.step === 2 && (
                    <>
                        <div className="space-y-6 py-3">
                            <h2 className="text-2xl font-bold text-yellow-300">Step 2: School/Professional Details</h2>
                            {formData.schoolDetails.map((school, index) => (
                                <div key={index}>
                                    <label className="block text-gray-300">School/University Name</label>
                                    <input
                                        type="text"
                                        name={`schoolName[${index}]`}
                                        placeholder="E.g., ABC University"
                                        value={school.schoolName}
                                        onChange={(e) => handleSchoolDetailsChange(e, index)}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                    <label className="block text-gray-300">Degree/Course</label>
                                    <input
                                        type="text"
                                        name={`degree[${index}]`}
                                        placeholder="E.g., Computer Science"
                                        value={school.degree}
                                        onChange={(e) => handleSchoolDetailsChange(e, index)}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                    <label className="block text-gray-300">Graduation Year</label>
                                    <input
                                        type="text"
                                        name={`graduationYear[${index}]`}
                                        placeholder="E.g., 2023"
                                        value={school.graduationYear}
                                        onChange={(e) => handleSchoolDetailsChange(e, index)}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSchool(index)}
                                            className="bg-red-500 text-white py-2 px-4 rounded mt-2"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddSchool}
                                className="bg-yellow-500 text-white py-2 px-4 rounded"
                            >
                                Add Education
                            </button>
                        </div>
                    </>
                )}

                {formData.step === 3 && (
                    <>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-yellow-300">Step 3: Shared Links and Reasons for Joining</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300">LinkedIn Profile URL</label>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        placeholder="E.g., https://www.linkedin.com/in/johndoe"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300">GitHub Profile URL</label>
                                    <input
                                        type="text"
                                        name="github"
                                        placeholder="E.g., https://github.com/johndoe"
                                        value={formData.github}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-300">Other Links (e.g., personal website)</label>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        name="otherLinks"
                                        placeholder="E.g., https://www.example.com"
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded flex-grow"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                otherLinks: [...prevData.otherLinks, ''],
                                            }));
                                        }}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded"
                                    >
                                        Add Link
                                    </button>
                                </div>
                                {formData.otherLinks.map((link, index) => (
                                    <div key={index} className="flex space-x-2 py-2">
                                        <p>{index + 1}:</p>
                                        <input
                                            type="text"
                                            name={`otherLinks.${index}`}
                                            value={link}
                                            onChange={(e) => {
                                                const updatedLinks = [...formData.otherLinks];
                                                updatedLinks[index] = e.target.value;
                                                setFormData({ ...formData, otherLinks: updatedLinks });
                                            }}
                                            placeholder="E.g., https://www.example.com"
                                            className="p-2 border border-gray-300 rounded flex-grow"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updatedLinks = [...formData.otherLinks];
                                                updatedLinks.splice(index, 1);
                                                setFormData((prevData) => ({ ...prevData, otherLinks: updatedLinks }));
                                            }}
                                            className="bg-red-500 text-white py-2 px-4 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <label className="block text-gray-300">Why are you interested in the Summer bootcamp?</label>
                            <textarea
                                name="joinReason"
                                placeholder="E.g., I'm interested in this bootcamp because..."
                                value={formData.joinReason}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded w-full h-24"
                            />
                        </div>
                    </>
                )}
                {formData.step === 4 && (
                    <>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-yellow-300">Step 4: Acknowledgement</h2>
                            <div className="space-y-2">
                                <label className="block text-gray-300">
                                    <input
                                        type="checkbox"
                                        name="termsAgreed"
                                        checked={formData.termsAgreed}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    I agree to the terms and conditions.
                                </label>
                            </div>
                        </div>
                    </>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {formData.step > 1 && (
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                    )}
                    {formData.step < 4 && (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-yellow-500 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
                {formData.step === 4 && (
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded"
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default Apply;
