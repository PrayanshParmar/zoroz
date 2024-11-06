export async function getCategoryList() {
  const response = await fetch("https://dummyjson.com/products/category-list");

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error(
      "An Error occurred while getting all companies."
    );

    error.status = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

export async function getProductByCategory(product: string) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${product}`
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error(
      "An Error occurred while getting all companies."
    );

    error.status = response.status;
    error.info = errorData;

    throw error;
  }
  const resData = await response.json();
  return resData.products;
}

export async function getAllProducts() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error(
      "An error occurred while getting all products."
    );

    error.status = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData.products;
}

export async function getSingleProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An error occurred while getting product.");

    error.status = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

export async function getAllCartProducts() {
  const response = await fetch(`https://dummyjson.com/carts?limit=5`);

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An error occurred while getting product.");

    error.status = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData.carts;
}
export async function mockPayment() {
  const success = Math.random() > 0.5;
  if (success) {
    return "success";
  } else {
    return "failure";
  }
}
