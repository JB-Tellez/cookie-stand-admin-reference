import LoginForm from '../components/login-form'
import CookieStandAdmin from '../components/cookie-stand-admin'
import { useAuth } from '../contexts/auth'

export default function Home() {

    const { user, login, logout } = useAuth();

    if (!user) return <LoginForm onSubmit={login} />

    // return <UserInfo user={user} />

    return <CookieStandAdmin
        onLogout={logout}
        username={user.username}
    />

}

/* use when building demo to show user information */
function UserInfo({ user }) {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}

