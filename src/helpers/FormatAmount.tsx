export function standardAmountFormat(amount: string){
    return "₦ "+ parseFloat(parseFloat(amount && amount).toFixed(2)).toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }