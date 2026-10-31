export const FLOATING_ORDER_DESTINATION = "/order";

export function floatingOrderLift(buttonBottom: number, footerTop: number) {
  return Math.max(0, buttonBottom + 16 - footerTop);
}

export function canShowFloatingOrder(itemPopupOpen: boolean, anotherModalOpen: boolean) {
  return !itemPopupOpen && !anotherModalOpen;
}