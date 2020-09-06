import axios from 'axios';
import { RSL_API_ENDPOINTS, FETCH_LATEST_LOTTO } from './types';

export const fetchLatestLottoResults = () => async (dispatch) => {
  const payload = {
    CompanyId: 'Tattersalls',
    MaxDrawCountPerProduct: 10,
    OptionalProductFilter: ['TattsLotto', 'OzLotto', 'Powerball'],
  };
  try {
    const { data } = await axios.post(
      RSL_API_ENDPOINTS.LATEST_RESULTS,
      payload,
    );
    var res = {};
    data.DrawResults.map((item) => {
      const { ProductId } = item;
      if (Object.keys(res).includes(ProductId)) {
        res[ProductId].push(item);
      } else {
        res[ProductId] = [item];
      }
    });
    dispatch(fetchLatestLottoResultSuccess(res));
  } catch (e) {
    console.log('ERROR:', e);
  }
};

const fetchLatestLottoResultSuccess = (drawResults) => ({
  type: FETCH_LATEST_LOTTO,
  drawResults,
});
