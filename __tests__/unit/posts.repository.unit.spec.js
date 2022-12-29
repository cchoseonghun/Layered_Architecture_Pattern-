// __tests__/unit/posts.repository.unit.spec.js

const PostRepository = require("../../repositories/posts.repository");


// posts.repository.js 에서는 아래 5개의 Method만을 사용합니다.
let mockPostsModel = {
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}

let postRepository = new PostRepository(mockPostsModel);

describe('Layered Architecture Pattern Posts Repository Unit Test', () => {

  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  })

  test('Posts Repository findAllPost Method', async () => {
    mockPostsModel.findAll = jest.fn(() => {  // mock 객체 생성
      return 'findAll Result';
    });

    const posts = await postRepository.findAllPost();

    // postsModel에 있는 findAll Method는 1번만 실행된다.
    expect(mockPostsModel.findAll).toHaveBeenCalledTimes(1);

    // postsModel에 있는 findAll Method의 결과값이 바로 Return 되어야 한다.
    expect(posts).toEqual('findAll Result');
  });


  test('Posts Repository createPost Method', async () => {
  });

});