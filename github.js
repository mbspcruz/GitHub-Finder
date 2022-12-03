class Github {
  constructor() {
    this.client_id = "8c50a1bb7fb3a4d71724";
    this.client_secret = "c7215f46067cf9211a50236bd49b03ad9e54003b";
    this.repos_count = 5;
    this.repos_sort = "creatr: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos,
    };
  }
}
