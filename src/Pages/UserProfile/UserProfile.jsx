import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  // Loader for initial user data
  if (loading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }

  if (!user) {
    return <h1 className="text-center text-2xl">No user data available</h1>;
  }

  // Refresh user data after updates
  const refreshUser = async () => {
    await user.reload(); // Reload the user object
    setPhoto(user.photoURL); // Update local state
  };

  // Handle updating the user's name
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await updateProfile(user, { displayName: name }); // Update name in Firebase Auth
      await refreshUser(); // Ensure fresh data is reflected
      setSuccessMsg("Name updated successfully!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to update name.");
    }
  };

  // Handle uploading and updating the user's profile photo
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setErrorMsg("Please select a file.");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(
      storage,
      `user_photos/${user.photoURL}/${file.name}`
    );
    setUploading(true);
    setErrorMsg("");

    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get download URL of the uploaded file
      const photoURL = await getDownloadURL(storageRef);

      // Update the photo URL in Firebase Auth
      await updateProfile(user, { photoURL });

      // Refresh the user data and update UI
      await refreshUser();
      setSuccessMsg("Photo uploaded and profile updated successfully!");
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to upload photo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div
        className="relative  text-white flex items-center justify-center pt-52 pb-24 "
        style={{
          backgroundImage: "url('/slider/house.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black opacity-70"></div>
        <h1 className="absolute lg:text-5xl text-2xl font-extrabold text-white uppercase">
          {user?.displayName || "User Profile"}
        </h1>
      </div>
      <div className="pt-10 py-10 flex flex-col items-center">
        {/* User Profile Photo */}

        <img
          src={photo || "https://via.placeholder.com/150"} // Fallback to placeholder if no photo
          alt={name || "User Profile"}
          className="rounded-full w-32 h-32 mb-4"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
        <div className="text-2xl font-semibold text-center mt-2">
          <h1>Name : {user.displayName}</h1>
          <h1>Email: {user.email}</h1>
        </div>
        {/* Update Form */}
        <form onSubmit={handleUpdate} className="w-1/2 flex flex-col gap-4">
          <div className="form-control">
            <label className="label">Name:</label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">Upload Photo:</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              onChange={handlePhotoUpload}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900"
          >
            Update Name
          </button>
        </form>

        {/* Status Messages */}
        <div className="text-center mt-4">
          {uploading && <p className="text-yellow-600">Uploading photo...</p>}
          {successMsg && <p className="text-green-600">{successMsg}</p>}
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
