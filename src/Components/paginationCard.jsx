import { useState } from "react";


export default function usePagination(productToShow,itemsPorPage) {
const [currentPage, setCurrentPage]=useState(1)
const endPages = Math.ceil(productToShow.length / itemsPorPage)

function currentProductsToShow(){
  const inicio= (currentPage-1)*itemsPorPage
  const fin=(inicio+itemsPorPage)
  return productToShow.slice(inicio, fin)
}

function nextPage(){
  setCurrentPage(currentPage=> Math.min(currentPage=1, endPages))
  window.scrollTo({
    top: "0px",
    behavior: "smooth",
})
}

function previousPage(){
  setCurrentPage(currentPage => Math.max(currentPage -1, 1))
  window.scrollTo({
    top: "0px",
    behavior: "smooth",
})
}

function jump(page){
  const pageNumber =Math.max(1, page)
  setCurrentPage(currentPage => Math.min(pageNumber, endPages))
  window.scrollTo({
    top: "0px",
    behavior: "smooth",
})
}
return {nextPage, previousPage, jump, currentProductsToShow, currentPage, endPages}





}

