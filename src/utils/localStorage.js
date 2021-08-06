class LocalStorageService {
    getAccessToken() {
        const auth = this.getUserInfo();
        if (auth != null) {
            return auth.accessToken;
        }
    }

    setUserInfo(userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    deleteUserInfo() {
        localStorage.removeItem("userInfo");
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem("userInfo"));
    }
}

const instance = new LocalStorageService();
export default instance;
