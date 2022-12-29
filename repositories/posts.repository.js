// repositories/posts.repository.js

// const { Posts } = require('../models');

class PostRepository {
  constructor(postsModel) {
    this.postsModel = postsModel;
  }


  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const posts = await this.postsModel.findAll();

    return posts;
  }

  createPost = async (nickname, password, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await this.postsModel.create({ nickname, password, title, content });

    return createPostData;
  }
}

module.exports = PostRepository;