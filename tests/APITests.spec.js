const { test, expect } = require('@playwright/test');
const exp = require('constants');


var userId;

test("Get Users", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test("Post Users", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users",
        {
            data: { "name": "Azim", "job": "tester" },
            headers: { "Accept": "application/json" }
        });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    var res = await response.json();
    userId = res.id;
});

test("Update Users", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/" + userId,
        {
            data: { "name": "Azim Afnaan", "job": "tester" },
            headers: { "Accept": "application/json" }
        });
    console.log(await response.json());
    expect(response.status()).toBe(200);

});


test("Delete Users", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/" + userId);
    expect(response.status()).toBe(204);
});