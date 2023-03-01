import React from "react";
import { Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const EmailCopy = () => {
    const doCopy = text => {
        // 1. 브라우저가 copy 지원 안될 경우
        if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }

        // 2. 복사할 텍스트 넣을 태그 만들기
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";

        // 3. 생성
        document.body.appendChild(textarea);
        // focus() -> 사파리 브라우저 서포팅
        textarea.focus();
        // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        textarea.select();
        // 4. 브라우저 copy 실행
        document.execCommand("copy");
        // 5. 2번 생성 제거하기
        document.body.removeChild(textarea);
        alert("이메일이 복사되었습니다.");
    };

    return (
        <Button
            variant="link"
            minW="0"
            colorScheme="gray"
            leftIcon={<EmailIcon />}
            onClick={() => doCopy("devofjar@gmail.com")}
        >
            devofjar@gmail.com
        </Button>
    );
}

export default EmailCopy;