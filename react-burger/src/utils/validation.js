const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const validate = (email) => {
    if(email && email.match(isValidEmail)){
        return true;
    }else{
        return false;
    }
}