import { FuzoraLogo } from "./_components/logo";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (  
        <div className="flex flex-col h-full items-center justify-center">
            <FuzoraLogo/>
            {children}
        </div>
    );
}
 
export default AuthLayout;