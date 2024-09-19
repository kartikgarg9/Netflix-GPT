import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute w-screen bg-gradient-to-b from-black px-8 py-4 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img className="w-36 md:w-48" src={LOGO} alt="logo" />
        </div>

        {/* User Section */}
        {user && (
          <div className="flex items-center justify-between space-x-4 md:space-x-6">
            {/* Language Selector */}
            {showGptSearch && (
              <select
                className="p-2 bg-gray-900 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search/Homepage Button */}
            <button
              className="py-2 px-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            {/* User Profile Icon */}
            {user.photoURL && (
              <img
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200"
                alt="User Icon"
                src={user.photoURL}
              />
            )}

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
