<template>
  <div class="container-content">
    <div class="header-content">
      <h3 style="margin-bottom: 0">TRANG CHỦ</h3>
    </div>

    <div class="body-content">
      <a-form :form="form">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Tên đăng nhập"
            >
              <a-input
                v-decorator="['username']"
                placeholder="Nhập tên đăng nhập"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Loại tài khoản"
            >
              <a-select
                v-decorator="['type']"
                placeholder="Chọn"
              >
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Name"
            >
              <a-input
                v-decorator="['username']"
                placeholder="Nhập tên đăng nhập"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-button type="primary" class="btn-default mt-25" html-type="submit" icon="search">
              Đăng nhập
            </a-button>
          </a-col>
        </a-row>
      </a-form>

      <div>
        <a-table :columns="columns" :data-source="data" bordered>
          <template slot="status" slot-scope="text, record, index">
            <a-tag v-if="text === 1" class="tag-active">
              Hoạt động
            </a-tag>
            <a-tag v-if="text === 1" class="tag-inactive">
              Khóa
            </a-tag>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
}

const columns = [
  {
    title: 'Tên đăng nhập',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Tên người dùng',
    dataIndex: 'fullName',
    key: 'fullName'
  },
  {
    title: 'Số CMT/CCCD',
    dataIndex: 'cardNumber',
    key: 'cardNumber'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status' },
    width: '15%'
  }
]

const data = [
  {
    key: '1',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '2',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '4',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '5',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '6',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '7',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  },
  {
    key: '8',
    fullName: 'John Brown',
    username: 'jb',
    status: 1,
    cardNumber: '023232323'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      formItemLayout,
      form: this.$form.createForm(this, { name: 'search-home' })
    }
  }
}
</script>
