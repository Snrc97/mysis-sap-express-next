'use client';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import MainLayout from '@/components/web/layout/main';
import ProductCard from '@/components/web/product-card';
import { HeaderButton } from '@/components/web/layout/header';
import { useEffect, useState } from 'react';
import Pagination from '@/components/ui-custom/Pagination';
import { apiService } from '@/scripts/api-service';

import { MarketItemListViewModel } from '@/../../backend/default/layer2_application/view_models/erp/MarketItemViewModels';

export default function Products() {
  const [marketListItems, setMarketListItems] = useState<
    MarketItemListViewModel[]
  >([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const _marketListItems = await apiService
        .get('public/market-item')
        .then((x) => x.data);
      setMarketListItems(_marketListItems);
    };
    fetchItems();
  }, []);

  const [cartItems, setCartItems] = useState<MarketItemListViewModel[]>([]);

  const [selectedSortBy, setSelectedSortBy] = useState<string>();

  const handleAddToCart = () => {
    if (typeof window !== 'undefined') {
      const cartItemsStorage = localStorageGetItem('cart');
      let cartItems: MarketItemListViewModel[] | Array<any> = cartItemsStorage
        ? JSON.parse(cartItemsStorage)
        : null;
      if (cartItems) {
        setCartItems(cartItems);
      }
    }
  };
  useEffect(() => {
    handleAddToCart();
  }, []);

  // handleFilter as well
  const handleSetMarketListItems = (props: {
    __marketListItems?: MarketItemListViewModel[];
    sortBy?: string;
  }) => {
    let { __marketListItems, sortBy } = props;
    __marketListItems = __marketListItems || marketListItems;
    sortBy = sortBy ?? selectedSortBy;
    if (!sortBy) {
      setMarketListItems(__marketListItems);
    } else if (sortBy === 'asc') {
      setMarketListItems(__marketListItems.sort((a, b) => a.price - b.price));
    } else if (sortBy === 'desc') {
      setMarketListItems(__marketListItems.sort((a, b) => b.price - a.price));
    }
  };

  const handlePageChange = (page: number) => {
    handleSetMarketListItems({ sortBy: selectedSortBy });
  };

  const headerButtons: HeaderButton[] = [
    {
      title: trans('erp.cart'),
      link: '/web/products/cart',
      icon: 'ShoppingCartIcon',
      badge: cartItems.length,
    },
  ];

  return (
    <MainLayout
      title={trans('erp.products')}
      className="flex flex-col w-full items-center"
      headerButtons={headerButtons}
    >
      {/* Sort by Price */}
      <div
        className="
            w-full 
            h-full 
            bg-gray-300 
            dark:bg-gray-700 
            font-bold 
            flex 
            flex-row 
            items-center 
            justify-end 
            px-10
            py-2"
      >
        <span className="mr-2 font-bold text-xl">{trans('common.sort')}:</span>
        <select
          title="Sort"
          className="border border-gray-300 rounded-xl px-3 py-1 
                bg-gray-300
                hover:bg-gray-400
                
                dark:bg-gray-700 
                dark:hover:bg-gray-600
                "
          onChange={(e) => {
            const value = e.currentTarget.value;
            setSelectedSortBy(value);
            handleSetMarketListItems({ sortBy: value });
          }}
        >
          <option value="">{trans('common.select')}</option>
          <option value="asc">{trans('e-commerce.sort.priceLowToHigh')}</option>
          <option value="desc">
            {trans('e-commerce.sort.priceHighToLow')}
          </option>
        </select>
      </div>
      {/* Sidebar */}
      <div className="flex flex-row w-full h-full py-10 px-10 gap-10 max-[680px]:flex-col">
        {/* Filters */}
        <div className="w-[450px] max-[540px]:w-full h-full p-4 bg-gray-100 dark:bg-gray-800">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder={trans('common.search_for', {
                what: trans('erp.product'),
              })}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => {
                const value = e.currentTarget.value.toLowerCase();
                setSearchValue(value);
              }}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Filtreler</h3>
            <div>
              <label>
                <input
                  type="checkbox"
                  onChange={() => {
                    // Implement filter logic here
                  }}
                />
                Filtre 1
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  onChange={() => {
                    // Implement filter logic here
                  }}
                />
                Filtre 2
              </label>
            </div>
            {/* Add more filters as needed */}
          </div>
        </div>

        <div className="flex flex-col w-full h-full items-end justify-center">
          <div
            className="
                    w-full 
                    h-full 
                    gap-6 
                    flex 
                    flex-row 
                    flex-wrap 
                    items-start 
                    justify-start 
                    max-[680px]:justify-center
                    "
          >
            {marketListItems.map((x, index) => {
              const conds =
                x.item?.product?.name?.toLowerCase()?.includes(searchValue) ||
                x.item?.product?.description
                  ?.toLowerCase()
                  ?.includes(searchValue);
              return (
                conds && (
                  <ProductCard
                    key={x.id}
                    className="w-70"
                    marketListItem={x}
                    OnAddedToCart={(product) => handleAddToCart()}
                  />
                )
              );
            })}
          </div>

          <Pagination
            OnPageChange={handlePageChange}
            numberOfItems={marketListItems.length}
          />
        </div>
      </div>
    </MainLayout>
  );
}
