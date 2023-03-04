let CarInformation = (carsObj:{manf_name:string, modl_name:string, car_color?:string})=>{
    console.log(carsObj)
  } 

  CarInformation({manf_name:"porche", modl_name:"porche V72"});
  CarInformation({manf_name:"porche", modl_name:"porche V72",car_color:"blue" });