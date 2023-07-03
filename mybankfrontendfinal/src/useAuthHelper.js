
function setSessionStorage(key, value)
{
    sessionStorage.setItem(key, value);
}

function getSessionStorage(key)
{
    return  sessionStorage.getItem(key);
}

function isLoggedIn()
{
    var isUserLoggedIn = getSessionStorage("isloggedIn");
    if(isUserLoggedIn!=null)
    {
        return isUserLoggedIn;
    }
    else
    {
        return false;
    }
}

function clearStorage()
{
    sessionStorage.removeItem("isloggedIn");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("token");
}

function useAuthHelper()
{
    return {
                setSessionStorage,
                getSessionStorage,
                isLoggedIn,
                clearStorage
           };
}

export default useAuthHelper;