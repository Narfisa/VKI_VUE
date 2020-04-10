import Vuex from 'vuex'
import axios from 'axios'
import {createLocalVue} from '@vue/test-utils'
import {Store} from '../../src/store'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(Store);

const messages = [
    {id:0, nickname: 'Narfisa', message: 'new message'},
    {id:1, nickname: 'Elensiya', message: 'another message'}
]

jest.mock("axios");
axios.get.mockImplementation(() => Promise.resolve({data: [...messages]}));
axios.post.mockImplementation(() => Promise.resolve({data: [...messages]}));

describe("store.ts", () => {
    it("Empty store after creating", () => {
        expect(store.state.messages.length).toBe(0);
    });

    it("Getting messages and save them to store.state", async () => {
        await store.dispatch("receiveMessages");
        expect(store.state.messages.length).toBe(messages.length);
        expect(store.state.messages).toEqual(messages);
    });

    it("Post message and update store", async () => {
        const message = {
            message: "new message",
            nickname: "new nick"
        };
        await store.dispatch("sendMessage", message);
        expect(store.state.messages.length).toBe(messages.length + 1);
        expect(store.state.messages).toEqual([...messages, message]);
    });
});