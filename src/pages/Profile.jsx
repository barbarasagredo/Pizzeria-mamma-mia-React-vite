const Profile = () => {
  const email = "usuario@profile.cl";
  return (
    <>
      <div className="container-fluid col-8">
        <div className="d-flex flex-column align-items-center border border-light-subtle shadow-sm rounded gap-3 p-5">
          <div className="border rounded-circle border-2 border-bottom-0 profile-img-container border-light-subtle shadow-sm">
            <i class="fa-solid fa-user text-secondary fs-2"></i>
          </div>
          <span className="text-secondary ">{email}</span>
          <button type="button" className="btn btn-dark">
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
