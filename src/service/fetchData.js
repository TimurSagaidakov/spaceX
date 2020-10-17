export default class FetchData {
  baseUrl = 'https://api.spacexdata.com/v4/';
  getData = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Произошла ошибка ${res.status}`);
    }

    return await res.json();
  }
  getRocket = async () => await this.getData(this.baseUrl + 'rockets')

  getLaunches = async () => await this.getData(this.baseUrl + 'launches/past')

  getOneLaunches = async (id) => await this.getData(this.baseUrl + 'launches/' + id)

  getCompany = async () => await this.getData(this.baseUrl + 'company')
}