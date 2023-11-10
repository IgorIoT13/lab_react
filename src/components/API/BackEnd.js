const RESOURSE_URL = `http://localhost:8080/Element`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

// public functionality

export const getAlllight = async () => {
    const rawResponse = await baseRequest({urlPath: "/all" });

    return await rawResponse.json();
};


export const findElementById = async (id) =>{
    const element = await baseRequest({urlPath: `?id=${id}`, method:"GET"})

    return await element.json();
}

export const findElementByTitle = async (title) =>{
    const element = await baseRequest({urlPath: `/find?title=${title}`, method:"GET"})

    return await element.json();
}