import Route from '@ember/routing/route';
import { service } from '@ember/service';

const locale = 'en-gb';

const currencyOptions = {
  style: 'currency',
  currency: 'GBP',
  currencyDisplay: 'narrowSymbol',
  trailingZeroDisplay: 'stripIfInteger',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export default class ApplicationRoute extends Route {
  @service intl;

  setupController() {
    super.setupController(...arguments);

    this.intl.setLocale([locale]);

    // outputs £10.00 = wrong :(
    console.log(this.intl.formatNumber(10, currencyOptions));

    // outputs £10 = correct :)
    console.log(
      new Intl.NumberFormat(locale, currencyOptions).format(10, currencyOptions)
    );
  }
}
