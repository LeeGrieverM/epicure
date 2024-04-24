export const carouselDynamicStyles = {
  width: "80%",
  height: "100%",
  margin: "0 auto",
  padding: "0",
  marginLeft: '0',
};

if (window.matchMedia("(max-width: 768px)").matches) {
  carouselDynamicStyles.width = "100%";
  carouselDynamicStyles.height = "auto";
  carouselDynamicStyles.padding = "0";
}

export const containerChefDynamicStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  rowGap: "30px",
  marginLeft: "10%",
};

if (window.matchMedia("(max-width: 768px)").matches) {
  containerChefDynamicStyles.marginLeft = "5%";
}

export const containerRegDynamicStyles = {
  margin: "0 auto",
  paddingTop: "4%",
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  rowGap: "30px",
  marginLeft: '0',
  paddinfRight: '0',
};

if (window.matchMedia("(max-width: 768px)").matches) {
  containerRegDynamicStyles.alignItems = "flex-start";
  containerRegDynamicStyles.rowGap = "20px";
  containerRegDynamicStyles.width= "96%";
  containerRegDynamicStyles.marginLeft = "4%";
}
