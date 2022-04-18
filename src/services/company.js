export const getCompaniesAPI = async() => {
 
    const companies = [
        {
            id: 1,
            mark: 'Nike'
        },
        {
            id: 2,
            mark: 'Adidas'
        },
        {
            id: 3,
            mark: 'Puma'    
        },
        {
            id: 4,
            mark: 'Reebok'
        },
    ]

    return new Promise((resolve) => setTimeout(resolve(companies), 2000))
}
 
 
export const getProductsPerCompanyAPI = async(companyId) => {
     const products = []
    let a = [
        {
          id: '1',
          gender: 'Male',
          mark: 'Nike',
          item: 'Sneakers',
          value: 94.12,
        },
        { id: '2', gender: 'Female', mark: 'Adidas', item: 'Socks', value: 5.49 },
        {
          id: '3',
          gender: 'Male',
          mark: 'Puma',
          item: 'T-Shirt',
          value: 54.67,
        },
        {
          id: '4',
          gender: 'Female',
          mark: 'Reebok',
          item: 'Trousers',
          value: 75.0,
        },
        {
          id: '5',
          gender: 'Female',
          mark: 'Puma',
          item: 'T-Shirt',
          value: 124.67,
        },
        {
          id: '6',
          gender: 'Male',
          mark: 'Reebok',
          item: 'Jacket',
          value: 55.0,
        },
        {
          id: '7',
          gender: 'Female',
          mark: 'Puma',
          item: 'Dress',
          value: 164.67,
        },
        {
          id: '8',
          gender: 'Male',
          mark: 'Reebok',
          item: 'Jeans',
          value: 275.0,
        },
        {
          id: '9',
          gender: 'Female',
          mark: 'Puma',
          item: 'Jacket',
          value: 64.67,
        },
        {
          id: '10',
          gender: 'Male',
          mark: 'Reebok',
          item: 'T-Shirt',
          value: 225.0,
        },
        {
          id: '11',
          gender: 'Female',
          mark: 'Puma',
          item: 'Sneakers',
          value: 64.67,
        },
        {
          id: '12',
          gender: 'Male',
          mark: 'Reebok',
          item: 'Trousers',
          value: 145.0,
        },
      ];
    a.forEach((el, i) => {
        products.push({
            id: i,
            item: `Product ${i} for company ${companyId}`
        })
    })
 
 
    return new Promise((resolve) => setTimeout(resolve(products), 2000))
}