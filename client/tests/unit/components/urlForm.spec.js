import { mount } from "@vue/test-utils";
import urlForm from "@/components/urlForm";

describe("URl short form", () => {
  const urlModule = {
    actions: { PostData: jest.fn().mockName("PostData") },
  };
  const component = mount(urlForm, urlModule);
  const urlInput = component.findAll("input").at(0);
  const urlTitle = component.findAll("input").at(1);
  const form = component.findAll("form").at(0);

  it("should mount form", async () => {
    await urlInput.setValue("https://duckduckgo.com");
    await urlTitle.setValue("Duck Duck Go");

    expect(urlInput.element.value).toBe("https://duckduckgo.com");
    expect(urlTitle.element.value).toBe("Duck Duck Go");
  });
});
