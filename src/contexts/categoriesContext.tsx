import { createContext,ReactNode, useState } from "react";
type CategoriesProviderType = {
  children: ReactNode;
};

type CategoryType = {
  id: string;
  name: string;
}

type CategoriesContextProps = {
  categorySelected: CategoryType;
  handleSelectCategory(category: CategoryType): void;
}


export const CategoriesContext = createContext<CategoriesContextProps>(
  {} as CategoriesContextProps
);

const CategoriesProvider = ({ children }: CategoriesProviderType) => {
  const [categorySelected, setCategorySelected] = useState<CategoryType>({
    id: "",
    name: "",
  });

  const handleSelectCategory = (category: CategoryType): void => {
    console.log(category);
    setCategorySelected(category);
  }

  return (
    <CategoriesContext.Provider
      value={{
        categorySelected,
        handleSelectCategory
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );



}

export { CategoriesProvider };