import { render, screen } from '@testing-library/react';
import  Header  from "../src/app/_components/Header/Header";
import  HomeLayout  from "../src/app/_components/HomeLayout/HomeLayout";
import  ProductsList  from "../src/app/_components/ProductsList/ProductsList";
import '@testing-library/jest-dom'


test('renders Header correctly', () => {
  render(<Header />);
  expect(screen.getByAltText('Menu')).toBeInTheDocument();
  expect(screen.getByAltText('Logo')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Blog')).toBeInTheDocument();
  expect(screen.getByText('Gifts')).toBeInTheDocument();
});

test('renders HomeLayout correctly', () => {
  render(<HomeLayout />);
  expect(screen.getByTestId('profile-info')).toBeInTheDocument();
  expect(screen.getByTestId('follow-us')).toBeInTheDocument();
  expect(screen.getByTestId('products-list')).toBeInTheDocument();
});

test('renders ProductsList correctly', () => {
  render(<ProductsList />);
  
  expect(screen.getAllByRole('tab')).toHaveLength(3); 
  expect(screen.getByText('Add Review')).toBeInTheDocument();
});
