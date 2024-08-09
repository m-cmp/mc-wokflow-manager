package kr.co.strato.workflow.dto.resDto;

import kr.co.strato.workflow.Entity.Workflow;
import kr.co.strato.workflow.Entity.WorkflowParam;
import kr.co.strato.workflow.Entity.WorkflowStageMapping;
import kr.co.strato.workflow.dto.entityMappingDto.WorkflowDto;
import kr.co.strato.workflow.dto.entityMappingDto.WorkflowParamDto;
import kr.co.strato.workflow.dto.entityMappingDto.WorkflowStageMappingDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.stream.Collectors;

@SuperBuilder
@Getter
@NoArgsConstructor // 기본 생성자 추가
public class WorkflowListResDto {
    private WorkflowDto workflowInfo;
    private List<WorkflowParamDto> workflowParams;
    private List<WorkflowStageMappingDto> workflowStageMappings;

    // from : 외부 (entity -> dto)
    public static WorkflowListResDto from(Workflow workflow, List<WorkflowParam> workflowParams, List<WorkflowStageMapping> workflowStageMappings) {
        return WorkflowListResDto.builder()
                .workflowInfo            (WorkflowDto.from(workflow))
                .workflowParams         (workflowParams.stream().map(WorkflowParamDto::from).collect(Collectors.toList()))
                .workflowStageMappings  (workflowStageMappings.stream().map(WorkflowStageMappingDto::from).collect(Collectors.toList()))
                .build();
    }

    // of : 내부 (dto -> dto)
    public static WorkflowListResDto of(WorkflowDto workflowDto, List<WorkflowParamDto> workflowParams, List<WorkflowStageMappingDto> workflowStageMappings) {
        return WorkflowListResDto.builder()
                .workflowInfo(workflowDto)
                .workflowParams(workflowParams)
                .workflowStageMappings(workflowStageMappings)
                .build();
    }
}
