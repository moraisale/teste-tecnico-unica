import axios from "axios";

const fetchDepoiments = async () => {
  const data = JSON.stringify({
    collection: "depoiments",
    database: "teste-tecnico-unica",
    dataSource: "teste-tecnico-unica",
  });

  const config = {
    method: "post",
    url: "https://sa-east-1.aws.data.mongodb-api.com/app/data-qxpnrew/endpoint/data/v1/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "QhZ4vZZNq8fyOJNUg5KPiBVN8ST2UVOeSaae1nd58WV5SGE3O8felngAHHeHLbxq",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return { status: 200, data: response.data };
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return {
      status: error.response?.status || 500,
      message: "Failed to fetch data",
    };
  }
};

export async function GET(request: Request): Promise<Response> {
  const response = await fetchDepoiments();
  return new Response(JSON.stringify(response.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
