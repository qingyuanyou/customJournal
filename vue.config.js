module.exports={
    css:{
        loaderOptions:{
            sass: {
                data: `@import "@/assets/style/global.scss";` // sass-loader v8
                //prependData: `@import "@/assets/style/global.scss";` //sass-loader v8
            }
        }
      }
}