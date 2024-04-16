import { renderHook, act } from '@testing-library/react';
import { useGetCategories } from '../src/app/Hooks/useGetCategories';
import { carsClient } from '../src/app/Api/Clients/CarsClient';

jest.mock('../src/app/Api/Clients/CarsClient'); 

describe('useGetCategories', () => {
  it('fetches categories correctly', async () => {
    const categoriesData = [
        { id: 1, name: 'Category 1', children: [{ id: 3,
            name: 'Sub cateory 1'}] },
        { id: 2, name: 'Category 2',  children: [{ id: 4,
            name: 'Sub cateory 2'}] }
    ];

    carsClient.fetchAllCategories.mockResolvedValueOnce(categoriesData); 

    const { result } = renderHook(() => useGetCategories());
    await act(async () => {});
    
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(categoriesData);
  });
});



