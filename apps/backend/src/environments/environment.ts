import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
  production: false,
  auth0_management_api_token: process.env.AUTH0_MANAGEMENT_API_TOKEN,
  auth0_management_api_base_url: process.env.AUTH0_MANAGEMENT_API_BASE_URL
});
