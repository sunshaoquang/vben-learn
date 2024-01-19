import { reactive, ref } from "vue";
/**
 *
 * @Last Modified by:   rightSun
 * * @Last Modified time: 2021-09-14 16:16:38
 * * @Description:
 * * @FilePath: \src\store\box.ts
 * * @Version: 1.0.0
 * @author: rightSun
 * @argument value: any 编辑商品数量
 * @argument item: any 操作的当前商品对象
 *  */
export const item = {
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
export const state = reactive({
  form: {
    id: "1747972985026777088",
    shipOrderNo: "FYCN2024011800009",
    planDeliveryTime: "2024-01-18 00:00:00",
    actualDeliveryTime: "2024-01-18 21:26:27",
    statusName: "部分出库",
    logisticsServiceProvider: "头程测试2",
    logisticsServiceProviderCode: "TEST002",
    carrier: "承运商1",
    carrierCode: "CYS001",
    transportType: 0,
    transportTypeName: "空运",
    isException: false,
    cntrModel: "45HQ",
    totalQty: 41,
    creator: "qiuhonghui",
    createTime: "2024-01-18 21:23:30",
    editor: "admin",
    modifyTime: "2024-01-19 02:33:38",
    tradeTypeName: "FOB",
    tradeType: 3,
    salesArea: "CN",
    salesOrg: "Jackery Inc",
    customsOrderNos: "",
    applyCustoms: true,
    inboundStatus: 1,
    isRepair: 0,
    transactionType: 1,
    isPullCustoms: false,
    billType: 1,
    pushOutStatus: 3,
    syncGhStatus: 1,
    boxItems: [
      {
        id: "1747973091385937920",
        boxNo: "WXZ2024011800203",
        sku: "G0500A0500AH-4",
        skuName: "Explorer 500",
        boxCaseNo: 1,
        isPallet: false,
        boxLength: 89,
        boxWidth: 89,
        boxHeight: 89,
        boxWeight: 89,
        destWhName: "美国线下-第三方南加",
        destWhCode: "CK206",
        receivedQty: 0,
        singleBoxQty: 12,
        packageClass: 2,
        tmsContainerProductRelationId: "1747973091398520832",
        itemId: "1747973091276886018",
        businessId: "1747972985026777088",
        businessNo: "FYCN2024011800009",
        businessType: 1,
        destCountryCode: "US",
        siteOrderNo: "JA-SO2024011700001",
        quantity: 12,
        itemSaveDTOList: [
          {
            boxId: "1747973091385937920",
            outboundPlanItemId: "1747972600228745217",
            outboundPlanId: "1747972600228745216",
            outboundPlanNo: "TFY20240118211752419",
            sku: "G0500A0500AH-4",
            skuName: "Explorer 500",
            siteOrderNo: "JA-SO2024011700001",
            billType: 1,
            destWhName: "美国线下-第三方南加",
            destWhCode: "CK206",
            qty: 12,
            outboundQty: 12,
            actualQty: 12,
          },
        ],
        qty: 12,
      },
      {
        id: "1747973091415298048",
        boxNo: "WXZ2024011800204",
        sku: "G0500A0500AH",
        skuName: "Jackery Explorer 500",
        boxCaseNo: 2,
        isPallet: false,
        boxLength: 89,
        boxWidth: 89,
        boxHeight: 38.1,
        boxWeight: 89,
        destWhName: "美国线下-第三方南加",
        destWhCode: "CK206",
        receivedQty: 0,
        singleBoxQty: 7,
        packageClass: 2,
        tmsContainerProductRelationId: "1747973091427880960",
        itemId: "1747973091276886017",
        businessId: "1747972985026777088",
        businessNo: "FYCN2024011800009",
        businessType: 1,
        destCountryCode: "US",
        siteOrderNo: "JA-SO2024011700001",
        quantity: 7,
        itemSaveDTOList: [
          {
            boxId: "1747973091415298048",
            outboundPlanItemId: "1747972600216162304",
            outboundPlanId: "1747972600211968000",
            outboundPlanNo: "TFY20240118211752418",
            sku: "G0500A0500AH",
            skuName: "Jackery Explorer 500",
            siteOrderNo: "JA-SO2024011700001",
            billType: 1,
            destWhName: "美国线下-第三方南加",
            destWhCode: "CK206",
            qty: 7,
            outboundQty: 7,
            actualQty: 7,
          },
        ],
        qty: 7,
      },
      {
        id: "1747973091440463872",
        boxNo: "WXZ2024011800205",
        sku: "G0500A0500AH",
        skuName: "Jackery Explorer 500",
        boxCaseNo: 3,
        isPallet: false,
        boxLength: 89,
        boxWidth: 89,
        boxHeight: 38.1,
        boxWeight: 89,
        destWhName: "美国线下-第三方南加",
        destWhCode: "CK206",
        receivedQty: 0,
        singleBoxQty: 7,
        packageClass: 2,
        tmsContainerProductRelationId: "1747973091457241088",
        itemId: "1747973091276886017",
        businessId: "1747972985026777088",
        businessNo: "FYCN2024011800009",
        businessType: 1,
        destCountryCode: "US",
        siteOrderNo: "JA-SO2024011700001",
        quantity: 7,
        itemSaveDTOList: [
          {
            boxId: "1747973091440463872",
            outboundPlanItemId: "1747972600216162304",
            outboundPlanId: "1747972600211968000",
            outboundPlanNo: "TFY20240118211752418",
            sku: "G0500A0500AH",
            skuName: "Jackery Explorer 500",
            siteOrderNo: "JA-SO2024011700001",
            billType: 1,
            destWhName: "美国线下-第三方南加",
            destWhCode: "CK206",
            qty: 7,
            outboundQty: 7,
            actualQty: 3,
          },
        ],
        qty: 7,
      },
      {
        id: "1747973091469824000",
        boxNo: "WXZ2024011800206",
        sku: "SP050BKH",
        skuName: "Solar Panel 50W",
        boxCaseNo: 4,
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
        tmsContainerProductRelationId: "1747973091482406912",
        itemId: "1747973091276886016",
        businessId: "1747972985026777088",
        businessNo: "FYCN2024011800009",
        businessType: 1,
        destCountryCode: "US",
        siteOrderNo: "JA-SO2024011700001",
        quantity: 5,
        itemSaveDTOList: [
          {
            boxId: "1747973091469824000",
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
      },
      {
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
      },
      {
        id: "1747973091511767040",
        boxNo: "WXZ2024011800208",
        sku: "SP050BKH",
        skuName: "Solar Panel 50W",
        boxCaseNo: 6,
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
        tmsContainerProductRelationId: "1747973091532738560",
        itemId: "1747973091276886016",
        businessId: "1747972985026777088",
        businessNo: "FYCN2024011800009",
        businessType: 1,
        destCountryCode: "US",
        siteOrderNo: "JA-SO2024011700001",
        quantity: 5,
        itemSaveDTOList: [
          {
            boxId: "1747973091511767040",
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
      },
    ] as any[],
    productList: [
      {
        id: "1747973091276886017",
        shipOrderId: "1747972985026777088",
        sku: "G0500A0500AH",
        skuName: "Jackery Explorer 500",
        customerModel: "1212",
        specificationModel: "HTE042500D-USA-JAK（橙色） RoHS REACH",
        exportQuotePrice: 31,
        importQuotePrice: 31,
        curCode: "EUR",
        siteOrderNo: "JA-SO2024011700001",
        salesOrg: "Jackery Inc",
        salesArea: "CN",
        expectOutboundQty: 14,
        totalReceivedQty: 0,
        singleBoxQty: 7,
        createTime: "2024-01-18 21:23:55",
        destWhCode: "CK206",
        destWhName: "美国线下-第三方南加",
        outboundPlanItemId: "1747972600216162304",
        outboundPlanNo: "TFY20240118211752418",
        quantity: 14,
        salOutboundNo: "JA-XSCKD24011800014",
        purInboundNo: "JA-XSCKD24011800014SH",
        actualQty: 10,
      },
      {
        id: "1747973091276886018",
        shipOrderId: "1747972985026777088",
        sku: "G0500A0500AH-4",
        skuName: "Explorer 500",
        customerModel: "Explorer 500",
        specificationModel:
          "HTE042500E-US-JAK（黑+橙色）(双层保护)线上 海运 RoHS REACH",
        exportQuotePrice: 2,
        importQuotePrice: 12,
        curCode: "JPY",
        siteOrderNo: "JA-SO2024011700001",
        salesOrg: "Jackery Inc",
        salesArea: "CN",
        expectOutboundQty: 12,
        totalReceivedQty: 0,
        singleBoxQty: 12,
        createTime: "2024-01-18 21:23:55",
        destWhCode: "CK206",
        destWhName: "美国线下-第三方南加",
        outboundPlanItemId: "1747972600228745217",
        outboundPlanNo: "TFY20240118211752419",
        quantity: 12,
        salOutboundNo: "JA-XSCKD24011800014",
        purInboundNo: "JA-XSCKD24011800014SH",
        actualQty: 12,
      },
      {
        id: "1747973091276886016",
        shipOrderId: "1747972985026777088",
        sku: "SP050BKH",
        skuName: "Solar Panel 50W",
        customerModel: "",
        specificationModel: " ",
        exportQuotePrice: 31,
        importQuotePrice: 23,
        curCode: "JPY",
        siteOrderNo: "JA-SO2024011700001",
        salesOrg: "Jackery Inc",
        salesArea: "CN",
        expectOutboundQty: 15,
        totalReceivedQty: 0,
        singleBoxQty: 5,
        createTime: "2024-01-18 21:23:55",
        destWhCode: "CK206",
        destWhName: "美国线下-第三方南加",
        outboundPlanItemId: "1747972600199385089",
        outboundPlanNo: "TFY20240118211752417",
        quantity: 15,
        salOutboundNo: "JA-XSCKD24011800014",
        purInboundNo: "JA-XSCKD24011800014SH",
        actualQty: 15,
      },
    ] as any[],
    estimatedDepartureTime: "2024-01-19 00:00:00",
  },
});

export function handleChangeQty(value: number, item: any) {
  try {
    // value 传入必须是正整数
    value = +value;
    // box 统一使用qty 给box列表里面新增原始字段boxUuid,originQty,originItemSaveDTOList，itemSaveDTOList里面的dtoUuid,
    state.form.boxItems = state.form.boxItems.map((ite: any) => {
      if (!ite.boxUuid) {
        ite.boxUuid = window.btoa(
          ite.boxCaseNo + ite.sku + ite.destWhCode + ite.packageClass
        );
        item.boxUuid = window.btoa(
          item.boxCaseNo + item.sku + item.destWhCode + item.packageClass
        );
      }
      // 拷贝一份原数据 qty为originQty
      if (!ite.qty) {
        ite.qty = ite?.quantity || 0;
        item.qty = ite?.quantity || 0;
      }
      if (!ite.originQty) {
        ite.originQty = ite.qty;
        item.originQty = ite.qty;
      }
      // 生成box里面dto的dtoUuid
      ite.itemSaveDTOList = [...ite.itemSaveDTOList].map((item1) => {
        if (!item1.dtoUuid) {
          item1.dtoUuid = window.btoa(
            item1.outboundPlanNo +
              item1.sku +
              item1.destWhCode +
              item1.siteOrderNo
          );
        }
        return item1;
      });
      // 拷贝一份原数据itemSaveDTOList为originItemSaveDTOList
      if (!ite.originItemSaveDTOList) {
        ite.originItemSaveDTOList = [...ite.itemSaveDTOList];
        item.originItemSaveDTOList = [...ite.itemSaveDTOList];
      }

      return ite;
    });
    // product 统一使用quantity 给product列表里面新增原始字段productUuid,originProductQuantity,actualQty
    state.form.productList = state.form.productList.map((ite: any) => {
      // 拷贝一份原数据
      if (!ite.originProductQuantity) {
        ite.originProductQuantity = ite?.quantity || 0;
        item.originProductQuantity = ite?.quantity || 0;
      }
      if (!ite.actualQty) {
        ite.actualQty = 0;
      }
      if (!ite.productUuid) {
        ite.productUuid = window.btoa(
          ite.outboundPlanNo + ite.sku + ite.destWhCode + ite.siteOrderNo
        );
      }
      return ite;
    });
    state.form.productList = state.form.productList
      .map((ite) => {
        // 删除对应商品数量
        let count = ref(-1);
        for (let i in item.itemSaveDTOList) {
          let item1 = item.itemSaveDTOList[i];
          //判断如果当前商品是对应的商品 说明对上了可以做删除操作
          if (item1.dtoUuid == ite.productUuid) {
            //如果是第一次进来
            if (count.value < 0) {
              count.value = value || 0;
            }
            // 可减范围=(原始录入数量 - 实际出库数量)
            let lowWidth1 = item.originQty - value;
            let lowWidth2 = ite.quantity - ite.actualQty;
            if (value > item.originQty) {
              console.log("修改的商品数量大于当前商品数量");

              throw new Error("修改的商品数量大于当前商品数量");
            }
            // 总数减少的数量 <= 可减少的范围
            if (!(lowWidth1 <= lowWidth2)) {
              console.log("录入数量不能小于实际出库数量");

              throw new Error("录入数量不能小于实际出库数量");
            }

            if (count.value < item1.qty) {
              item1.qty = item1.qty - count.value;
              item1.outboundQty = item1.outboundQty - count.value;
              // 修改当前商品的数量 商品总数 - （当前原始盒子数量 + value）
              ite.quantity = ite.quantity - (item.originQty + value);
              // 成功修改盒子数量
              item.qty = value;
              break;
            } else if (count.value === item1.qty) {
              // 修改当前商品的数量 商品总数 - （当前原始盒子数量 + value）
              ite.quantity = ite.quantity - (item.originQty + value);
              // 成功修改盒子数量
              item.qty = value;
              // 删除 结束循环
              item.itemSaveDTOList.splice(i, 1);
              break;
            } else {
              // 删除 并继续循环
              count.value = count.value - item1.qty;
              item.itemSaveDTOList.splice(i, 1);
            }
          }
        }

        return ite;
      })
      .filter((item: any) => item.quantity > 0);
    state.form.boxItems = state.form.boxItems.filter(
      (item: any) => item.qty > 0
    );
    return state;
  } catch (error) {
    console.error(error);
  }
}
