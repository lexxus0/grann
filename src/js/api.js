import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://66f82af52a683ce9730ed951.mockapi.io';

export async function getCatalog() {
  try {
    const response = await axios.get('/Products');

    if (response.data.length === 0) {
      iziToast.error({
        message: 'Oops...Something went wrong!',
        position: 'bottomRight',
      });
      return;
    }
    return response.data;
  } catch {
    iziToast.error({
      message: 'Oops...Something went wrong!',
      position: 'bottomRight',
    });
  }
}