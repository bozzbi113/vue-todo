class LiferayApiService {
  /**
   * Private call Liferays API using service available within portal(portlet) context
   *
   * @param {String} url
   * @param {Object} jsonData
   */
  callApi(url, jsonData) {
    return new Promise(resolve => {
      Liferay.Service(url, jsonData, resolve);
    });
  }

  getUserPermissions(userId) {
    // TODO
    return ["user"];
  }

  getCurrentUser() {
    return {
      id: Liferay.ThemeDisplay.getUserId(),
      name: Liferay.ThemeDisplay.getUserName(),
      email: Liferay.ThemeDisplay.getUserEmailAddress()
    };
  }

  /**
   * Gets whether the current user has the specified role
   *
   * @param {String} userRole
   */
  getCurrentUserHasRole(userRole) {
    return this.callApi("/role/has-user-role", {
      userId: Liferay.ThemeDisplay.getUserId(),
      companyId: Liferay.ThemeDisplay.getCompanyId(),
      name: userRole,
      inherited: true
    })
      .then(hasRole => {
        console.log(userRole + " in service - " + hasRole);
        if (hasRole === true) {
          return true;
        }
        return false;
      })
      .catch(error => {
        throw error;
      });
  }
}

export default new LiferayApiService();
