package kr.co.strato.jenkins.pipeline.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.strato.api.response.ResponseCode;
import kr.co.strato.api.response.ResponseWrapper;
import kr.co.strato.jenkins.pipeline.model.Pipeline;
import kr.co.strato.jenkins.pipeline.service.JenkinsPipelineService;

@Tag(name = "Workflow Stage", description ="워크플로우 스테이지 관리")
@RequestMapping("/stage")
@RestController
public class JenkinsPipelineController {
//
//	@Autowired
//	private JenkinsPipelineService pipelineService;
//
//    @Operation(summary="스테이지 목록 조회")
//    @GetMapping("/pipeline/list")
//	public ResponseWrapper<List<Pipeline>> getPipelineList() {
//    	return new ResponseWrapper<>(pipelineService.getPipelineList(null));
//	}
//
//    @Operation(summary="스테이지 조회")
//    @GetMapping("/pipeline/{pipelineId}")
//    public ResponseWrapper<Pipeline> getPipeline(@PathVariable int pipelineId) {
//    	return new ResponseWrapper<>(pipelineService.getPipeline(pipelineId));
//    }
//
//    @Operation(summary="기본 스크립트 조회")
//    @GetMapping("/pipeline/default")
//    public ResponseWrapper<List<Pipeline>> getDefaultPipeline(@RequestParam String pipelineCd) {
//    	return new ResponseWrapper<>(pipelineService.getDefaultPipeline(pipelineCd));
//    }
//
//    @Operation(summary="스테이지 명 중복 체크", description="true : 중복 / false : 중복 아님")
//    @GetMapping("/pipeline/name/duplicate")
//    public ResponseWrapper<Boolean> isPipelineNameDuplicated(@RequestParam String pipelineCd, @RequestParam String pipelineName) {
//    	if ( StringUtils.isBlank(pipelineCd) ) {
//    		return new ResponseWrapper<>(ResponseCode.BAD_REQUEST, "pipelineCd");
//    	}
//    	else if ( StringUtils.isBlank(pipelineName) ) {
//    		return new ResponseWrapper<>(ResponseCode.BAD_REQUEST, "pipelineName");
//    	}
//
//    	return new ResponseWrapper<>(pipelineService.isPipelineNameDuplicated(pipelineCd, pipelineName));
//    }
//
//    @Operation(summary="스테이지 등록")
//    @PostMapping("/pipeline")
//    public ResponseWrapper<Integer> createPipeline(@RequestBody Pipeline pipeline) {
//    	pipeline.setRegId("admin");
//    	pipeline.setRegName("admin");
//
//    	return new ResponseWrapper<>(pipelineService.createPipeline(pipeline));
//    }
//
//    @Operation(summary="스테이지 수정")
//    @PutMapping("/pipeline/{pipelineId}")
//    public ResponseWrapper<Integer> updatePipeline(@PathVariable int pipelineId, @RequestBody Pipeline pipeline) {
//    	if ( pipeline.getPipelineId() == null || pipeline.getPipelineId() == 0 ) {
//    		pipeline.setPipelineId(pipelineId);
//    	}
//
//    	pipeline.setModId("admin");
//    	pipeline.setModName("admin");
//
//    	return new ResponseWrapper<>(pipelineService.updatePipeline(pipeline));
//    }
//
//    @Operation(summary="스테이지 삭제")
//    @DeleteMapping("/pipeline/{pipelineId}")
//    public ResponseWrapper<Integer> deletePipeline(@PathVariable int pipelineId) {
//    	return new ResponseWrapper<>(pipelineService.deletePipeline(pipelineId));
//    }
}
