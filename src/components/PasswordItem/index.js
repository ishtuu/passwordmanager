import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {id, website, username, password, isShow} = passwordDetails
  const initial = website.slice(0, 1).toUpperCase()

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }
  return (
    <div className="div">
      <li className="list-password-container">
        <div className="password-list-container">
          <div className="initial">
            <p className="initial-name">{initial}</p>
          </div>
          <div>
            <div className="username-time-container">
              <p className="website">{website}</p>
              <p className="username">{username}</p>
            </div>
            {isShow ? (
              <p className="password">{password}</p>
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                  className="star"
                />
              </div>
            )}
          </div>
          <button className="button" type="button" onClick={onDeletePassword}>
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default PasswordItem
