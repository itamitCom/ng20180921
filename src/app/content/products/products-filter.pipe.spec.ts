import {ProductsFilterPipe} from './products-filter.pipe';
import {IProduct} from '../../common/entity/ProductInterface';

const products: IProduct[] = [
    {
        id: '1',
        title: 'Some product 1',
        serial: 123456789,
        author: 'Some brand 1',
        price: 1000,
        src: 'Some src 1'
    },
    {
        id: '2',
        title: 'Some product 2',
        serial: 223456789,
        author: 'Some brand 2',
        price: 2000,
        src: 'Some src 2'
    }
];

describe('ProductsFilterPipe', () => {
    let pipe: ProductsFilterPipe;

    beforeEach(() => {
        pipe = new ProductsFilterPipe();
    });

    it('create an instance', () => {
        expect(pipe.transform(products, 'Some brand 1').length)
            .toBe(1);

        expect(pipe.transform(products, 'Some brand 1'))
            .toEqual([products[0]]);
    });
});
