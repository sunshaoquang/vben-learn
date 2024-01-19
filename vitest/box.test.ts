import { describe, expect, it } from "vitest";
import { handleChangeQty } from "../utils/box"; // 假设这是要测试的函数
const item = {
  id: "1747973091490795520",
  boxNo: "WXZ2024011800207",
  sku: "SP050BKH",
  skuName: "Solar Panel 50W",
  boxCaseNo: 5,
  isPallet: false,
  boxLength: 89,
  boxWidth: 89,
  boxHeight: 89,
  boxWeight: 89,
  destWhName: "美国线下-第三方南加",
  destWhCode: "CK206",
  receivedQty: 0,
  singleBoxQty: 5,
  packageClass: 2,
  tmsContainerProductRelationId: "1747973091499184128",
  itemId: "1747973091276886016",
  businessId: "1747972985026777088",
  businessNo: "FYCN2024011800009",
  businessType: 1,
  destCountryCode: "US",
  siteOrderNo: "JA-SO2024011700001",
  quantity: 5,
  itemSaveDTOList: [
    {
      boxId: "1747973091490795520",
      outboundPlanItemId: "1747972600199385089",
      outboundPlanId: "1747972600199385088",
      outboundPlanNo: "TFY20240118211752417",
      sku: "SP050BKH",
      skuName: "Solar Panel 50W",
      siteOrderNo: "JA-SO2024011700001",
      billType: 1,
      destWhName: "美国线下-第三方南加",
      destWhCode: "CK206",
      qty: 5,
      outboundQty: 5,
      actualQty: 5,
    },
  ],
  qty: 5,
};
describe("handleChangeQty", () => {
  // 单元测试开始
  it("操作删除这个对象", () => {
    expect(handleChangeQty(0, item));
  });
});
