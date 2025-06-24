export default function Login(){
    return(
        <>
            <div className="border-4 border-pink-900">
                <h1>Login</h1>
                <div>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                </div>
                <p>Don't have an account <span>Sign Up</span></p>
            </div>
        </>
    );
}