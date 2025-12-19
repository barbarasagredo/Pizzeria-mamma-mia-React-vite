import { useUser } from "../contexts/UserContext";

const Profile = () => {
  // const email = "usuario@profile.cl";
  const { logout, user, isAuthenticated } = useUser();
  return (
    <>
      <div className="container-fluid col-8">
        <div className="d-flex flex-column align-items-center border border-light-subtle shadow-sm rounded gap-3 p-5">
          <div className="border rounded-circle border-2 border-bottom-0 profile-img-container border-light-subtle shadow-sm">
            <i className="fa-solid fa-user text-secondary fs-2"></i>
          </div>
          {isAuthenticated && user && (
            <span className="text-secondary fs-5">{user}</span>
          )}
          <button type="button" className="btn btn-dark" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
