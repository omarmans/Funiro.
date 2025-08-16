import { signal } from '@angular/core';

// export const productsComparison = signal([
//   {
//     Title: 'Asgaard Sofa',
//     price: 'Rs 250,000,00',
//     rate: 4.7,
//     reviews: 104,
//     img: 'imgs/comparison/AsgaardSofa.png',
//     specs: {
//       General: {
//         'Sales Package': '1 sectional sofa',
//         'Model Number': 'TFCBLIGRBL6SRHS',
//         'Secondary Material': 'Solid Wood',
//         Configuration: 'L-shaped',
//         'Upholstery Material': 'Fabric + Cotton',
//         'Upholstery Color': 'Bright Grey & Lion',
//       },
//       Product: {
//         'Filling Material': 'Foam',
//         'Finish Type': 'Bright Grey & Lion',
//         'Adjustable Headrest': 'No',
//         'Maximum Load Capacity': '300 KG',
//         'Origin of Manufacture': 'India',
//       },
//       Dimensions: {
//         Width: '205.2 cm',
//         Height: '76 cm',
//         Depth: '91.44 cm',
//         Weight: '45 KG',
//         'Seat Height': '41.5 cm',
//         'Leg Height': '5.1 cm',
//       },
//       Warranty: {
//         'Warranty Summary': '1 Year Manufacturing Warranty',
//         'Warranty Service Type':
//           'For Warranty Claims or Any Product Related Issues...',
//         'Covered in Warranty': 'Warranty Against Manufacturing Defect',
//         'Not Covered in Warranty': 'The Warranty Does Not Cover...',
//         'Domestic Warranty': '1 Year',
//       },
//     },
//   },
//   {
//     Title: 'Outdoor Sofa Set',
//     price: 'Rs. 224,000.00',
//     rate: 4.2,
//     reviews: 145,
//     img: 'imgs/comparison/Outdoorsofaset.png',
//     specs: {
//       General: {
//         'Sales Package': '1 three seater, 2 single sofas',
//         'Model Number': 'DTUBLIGRBL6SRHS',
//         'Secondary Material': 'Solid Wood',
//         Configuration: 'L-shaped',
//         'Upholstery Material': 'Fabric + Cotton',
//         'Upholstery Color': 'Bright Grey & Lion',
//       },
//       Product: {
//         'Filling Material': 'Rubber',
//         'Finish Type': 'Bright Grey & Lion',
//         'Adjustable Headrest': 'No',
//         'Maximum Load Capacity': '300 KG',
//         'Origin of Manufacture': 'India',
//       },
//       Dimensions: {
//         Width: '205.2 cm',
//         Height: '76 cm',
//         Depth: '91.44 cm',
//         Weight: '65 KG',
//         'Seat Height': '41.5 cm',
//         'Leg Height': '5.1 cm',
//       },
//       Warranty: {
//         'Warranty Summary': '1 Year Manufacturing Warranty',
//         'Warranty Service Type':
//           'For Warranty Claims or Any Product Related Issues...',
//         'Covered in Warranty': 'Warranty Against Manufacturing Defect',
//         'Not Covered in Warranty': 'The Warranty Does Not Cover...',
//         'Domestic Warranty': '1 Year',
//       },
//     },
//   },
// ]);

export const productsComparison = signal([
  {
    Title: 'Asgaard Sofa',
    price: 'Rs 250,000.00',
    rate: 4.7,
    reviews: 104,
    img: 'imgs/comparison/AsgaardSofa.png',

    general: {
      SalesPackage: '1 Sectional Sofa',
      ModelNumber: 'TFCBLIGRBL6M3',
      SecondaryMaterial: 'Solid Wood',
      Configuration: 'L-shaped',
      UpholsteryMaterial: 'Fabric + Cotton',
      UpholsteryColor: 'Bright Grey & Lion',
    },

    product: {
      FillingMaterial: 'Foam',
      FinishType: 'Bright Grey & Lion',
      AdjustableHeadrest: 'No',
      MaximumLoadCapacity: '300 KG',
      OriginOfManufacture: 'India',
    },

    dimensions: {
      Width: '289.27 cm',
      Height: '79.9 cm',
      Depth: '158.2 cm',
      Weight: '45 KG',
      SeatHeight: '41.65 cm',
      LegHeight: '5.46 cm',
    },

    warranty: {
      Summary: '1 Year Manufacturing Warranty',
      ServiceType:
        'For Warranty Claims or Any Product Related Issues, Please Email at operations@trevifurniture.com',
      CoveredInWarranty: 'Warranty Against Manufacturing Defect',
      NotCoveredInWarranty:
        'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
      DomesticWarranty: '1 Year',
    },
  },

  {
    Title: 'Outdoor Sofa Set',
    price: 'Rs 224,000.00',
    rate: 4.2,
    reviews: 145,
    img: 'imgs/comparison/Outdoorsofaset.png',

    general: {
      SalesPackage: '1 Three Seater , 2 Single Seater',
      ModelNumber: 'DTUBLIGRBL6M3',
      SecondaryMaterial: 'Solid Wood',
      Configuration: 'L-shaped',
      UpholsteryMaterial: 'Fabric + Cotton',
      UpholsteryColor: 'Bright Grey & Lion',
    },

    product: {
      FillingMaterial: 'Matte',
      FinishType: 'Bright Grey & Lion',
      AdjustableHeadrest: 'No',
      MaximumLoadCapacity: '300 KG',
      OriginOfManufacture: 'India',
    },

    dimensions: {
      Width: '297.29 cm',
      Height: '77 cm',
      Depth: '159.76 cm',
      Weight: '65 KG',
      SeatHeight: '41.66 cm',
      LegHeight: '5.46 cm',
    },

    warranty: {
      Summary: '1 Year Manufacturing Warranty',
      ServiceType:
        'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com',
      CoveredInWarranty:
        'Warranty of the product is limited to manufacturing defects only.',
      NotCoveredInWarranty:
        'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
      DomesticWarranty: '3 Months',
    },
  },
]);
