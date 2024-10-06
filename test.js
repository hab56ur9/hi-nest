async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);  // 2초 후에 이행
    });
    
    let result = await promise;  // Promise가 완료될 때까지 기다림
    console.log(result);  // "Data fetched"
}

fetchData();