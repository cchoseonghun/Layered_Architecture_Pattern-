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
    mockPostsModel.create = jest.fn(() => {
      return 'hello result'
    })

    const createPostParams = {
      nickname: 'createPostNickname', 
      password: 'createPostpassword', 
      title: 'createPosttitle', 
      content: 'createPostcontent', 
    }

    const createPostData = await postRepository.createPost(
      createPostParams.nickname, 
      createPostParams.password, 
      createPostParams.title, 
      createPostParams.content, 
    )

    // postsModel.create Method의 결과값은 createPostData (method)의 실행한 결과값 변수와 일치한다.
    expect(createPostData).toEqual('hello result');

    // postsModel.create Method는 1번 호출된다.
    expect(mockPostsModel.create).toHaveBeenCalledTimes(1);

    // postsModel.create Method를 호출할 때, { nickname, password, title, content };
    expect(mockPostsModel.create).toHaveBeenCalledWith({
      nickname: createPostParams.nickname, 
      password: createPostParams.password, 
      title: createPostParams.title, 
      content: createPostParams.content, 
    })
  });

});