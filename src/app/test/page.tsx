import userLogin from "@/libs/userLogin";

export default function test(){
    const x = userLogin("admin@admin.com","$1234ABC");
    console.log(x);
    return(
        null
    );
}