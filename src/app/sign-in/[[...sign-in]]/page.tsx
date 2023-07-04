import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

export default function Page() {
    return <SignIn 
    signUpUrl="/sign-up"
    appearance={{ 
        baseTheme: neobrutalism
    }} />;
}