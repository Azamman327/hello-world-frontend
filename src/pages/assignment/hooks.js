import axiosPromise from "../../services/axiosPromise";

export const loadAssignment = async ( assignmentId ) => {
    let data = await axiosPromise.get(`/assignments/${assignmentId}`);
    if(!data) {
        data = {
            assignmentId: assignmentId,
            classId: 1,
            name: "중간고사",
            start_time: "",
            end_time: "",
            test_time: "",
        };
    }

    let tests = await axiosPromise.get(`/assignments/${assignmentId}/tests`);
    if(!tests) tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    data.tests = [];
    for(let i = 0; i < tests.length; i++) {
        let test = await axiosPromise.get(`/tests/${tests[i]}`);
        if(!test) {
            test = { testId: tests[i], name: `문제 ${i+1}`, description: `# 문제 ${i+1}` };
        }
        data.tests.push(test);
    }

    console.log(data);

    return data;
};

export const submit = async (testId, language, code) => {
    let data = await axiosPromise.post(`/tests/${testId}/submits`, {language, code});
    return data;
};

export const getResult = async (testId) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits`);
    if(!data) {
        const createData = (id, submitTime, language, errMsg, runTime, fileSize, score) => {
            return { id, submitTime, language, errMsg, runTime, fileSize, score };
        }
        data = [];
        const length = Math.floor(Math.random() * 20);
        for (let i = 0; i < length; i++) {
            data.push(createData(i, "2023-03-19 AM 11:00", "Java", null, "이정도", "이정도", 50));
        }
    }
    return data;
};

export const getCode = async (testId, index) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits/${index}`);
    if(!data) {
        data = {
            language: "c",
            code: 
`#include <stdio.h>
    
int main(void) {
    print("Hello World");
}`,
            error: `print()가 아니라 printf()지롱~`
        }
    }
    return data;
}