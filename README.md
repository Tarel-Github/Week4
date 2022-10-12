# Week4
config파일은 제외되었습니다.

또한, 좋아요 게시글 조회의 메소드를 POST로 사용하였습니다
GET으로 요청시 반응하지 않았기 때문입니다.

====================================

#회원가입
URL: api/signup
메소드: POST

#로그인
URL: api/login
메소드: POST

#게시글 작성
URL: api/posts
메소드: POST

#게시글 조회
URL: api/posts
메소드: GET

#게시글 상세 조회
URL: api/posts/:postId
메소드: GET

#게시글 수정
URL: api/posts/:postId
메소드: PUT

#게시글 삭제
URL: api/posts/:postId
메소드: DELETE

#댓글생성
URL: api/comments/:postId
메소드: POST

#댓글 목록 조회
URL: api/comments/:postId
메소드: GET

#댓글 수정
URL: api/comments/:commentId
메소드: PUT

#댓글 삭제
URL: api/comments/:commentId
메소드: DELETE

#게시글 좋아요
URL: api/posts/:postId/like
메소드: POST

#좋아요 게시글 조회
URL: api/posts/like
메소드: POST
