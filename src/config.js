export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_XPYKB0z8qwdVUpef4ifjlSe0",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "ucom-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://nvoxvxfy5i.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_bSpWUJUB1",
    APP_CLIENT_ID: "1j88s0aq128knrkggpsnr3lmvp",
    IDENTITY_POOL_ID: "eu-central-1:9bf38d21-4f3f-49a7-9ddf-d9e8c2d21452"
  }
};